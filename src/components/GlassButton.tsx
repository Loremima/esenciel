import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, LucideIcon } from 'lucide-react';

interface GlassButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  showDefaultIcon?: boolean;
  type?: 'button' | 'submit' | 'reset';
  compact?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  to,
  onClick,
  children,
  className = '',
  icon: Icon,
  showDefaultIcon = true,
  type = 'button',
  compact = false,
}) => {
  const isPrendreRdv = typeof children === 'string' && (children.toLowerCase().includes('rendez-vous') || children.toLowerCase().includes('réserver'));
  const SelectedIcon = Icon || (isPrendreRdv && showDefaultIcon ? Calendar : null);

  const baseClasses = `btn-glass-shared ${compact ? 'btn-glass-shared--compact' : ''} ${className}`;

  const content = (
    <>
      <span className="btn-glass-shared__text">{children}</span>
      {SelectedIcon && <SelectedIcon size={compact ? 16 : 20} className="btn-glass-shared__icon" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default GlassButton;
