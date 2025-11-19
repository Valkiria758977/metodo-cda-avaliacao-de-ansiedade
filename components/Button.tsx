import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    disabled?: boolean;
    icon?: React.ComponentType;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', disabled = false, icon: Icon, className = '' }) => {
    const baseStyle = "flex items-center justify-center px-4 py-3 rounded-lg font-bold transition-all active:scale-95 shadow-sm hover:shadow-md select-none";
    
    let variantStyle = "";
    switch (variant) {
        case 'primary':
            variantStyle = "bg-cda-gold text-cda-green border border-cda-gold hover:bg-white hover:border-white";
            break;
        case 'secondary':
            // Texto Branco (para barra fixa ou fundos escuros)
            variantStyle = "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white";
            break;
        case 'outline':
            // Texto Branco (para corpo da página em fundo verde escuro)
            variantStyle = "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white";
            break;
        case 'danger':
            variantStyle = "bg-white text-red-600 border border-red-200 hover:bg-red-50 hover:border-red-500";
            break;
    }

    const disabledStyle = disabled ? "opacity-50 cursor-not-allowed active:scale-100" : "cursor-pointer";

    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={`${baseStyle} ${variantStyle} ${disabledStyle} ${className}`}
        >
            {Icon && <span className="mr-2"><Icon /></span>}
            {children}
        </button>
    );
};