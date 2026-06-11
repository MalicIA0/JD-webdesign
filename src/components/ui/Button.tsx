import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'lime' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'lime', size = 'md', className = '', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm cursor-pointer select-none'

    const variants = {
      lime: 'bg-lime text-black hover:bg-[#d4ff3a] active:scale-[0.98]',
      outline:
        'border text-off-white hover:bg-white/5 active:scale-[0.98]',
      ghost: 'text-muted hover:text-off-white active:scale-[0.98]',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-sm gap-2',
      lg: 'px-8 py-4 text-base gap-2',
    }

    const outlineStyle =
      variant === 'outline'
        ? { borderColor: 'var(--border-subtle)' }
        : {}

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        style={outlineStyle}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
