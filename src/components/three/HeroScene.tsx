'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const mount = mountRef.current

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Scene + Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 8)

    // — Particle cloud (2k points, encre + terracotta sur fond crème) —
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const inkR = 23 / 255, inkG = 20 / 255, inkB = 16 / 255
    const terraR = 188 / 255, terraG = 74 / 255, terraB = 36 / 255

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 26
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3

      // ~18% de points terracotta pour réchauffer le nuage d'encre
      const warm = Math.random() < 0.18
      const bright = 0.5 + Math.random() * 0.5
      colors[i * 3]     = (warm ? terraR : inkR) * bright
      colors[i * 3 + 1] = (warm ? terraG : inkG) * bright
      colors[i * 3 + 2] = (warm ? terraB : inkB) * bright
    }
    const ptGeo = new THREE.BufferGeometry()
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    ptGeo.setAttribute('color',    new THREE.BufferAttribute(colors,    3))
    const ptMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(ptGeo, ptMat)
    scene.add(particles)

    // — Wireframe torus (terracotta très léger) —
    const torusGeo = new THREE.TorusGeometry(4, 1.2, 20, 120)
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xBC4A24,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    torus.rotation.x = Math.PI / 5
    torus.position.set(3, -1, -4)
    scene.add(torus)

    // — Connecting lines network —
    const lineCount = 80
    const linePositions = new Float32Array(lineCount * 2 * 3)
    for (let i = 0; i < lineCount; i++) {
      const idx = i * 6
      linePositions[idx]     = (Math.random() - 0.5) * 24
      linePositions[idx + 1] = (Math.random() - 0.5) * 14
      linePositions[idx + 2] = (Math.random() - 0.5) * 10
      linePositions[idx + 3] = linePositions[idx]     + (Math.random() - 0.5) * 4
      linePositions[idx + 4] = linePositions[idx + 1] + (Math.random() - 0.5) * 3
      linePositions[idx + 5] = linePositions[idx + 2]
    }
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x171410,
      transparent: true,
      opacity: 0.08,
    })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // Mouse tracking
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2
      targetY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Animation loop
    let rafId: number
    let t = 0
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      t += 0.004

      // Smooth mouse follow
      currentX += (targetX - currentX) * 0.03
      currentY += (targetY - currentY) * 0.03
      camera.position.x = currentX * 0.6
      camera.position.y = currentY * 0.4
      camera.lookAt(0, 0, 0)

      // Slow drift
      particles.rotation.y = t * 0.025
      particles.rotation.x = Math.sin(t * 0.15) * 0.03
      torus.rotation.x += 0.0008
      torus.rotation.y += 0.0012
      lines.rotation.y = t * 0.01

      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      ptGeo.dispose(); ptMat.dispose()
      torusGeo.dispose(); torusMat.dispose()
      lineGeo.dispose(); lineMat.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />
}
