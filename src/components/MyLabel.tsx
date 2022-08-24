import './mylabel.css'

export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string
    /**
     * Este es el tamanio de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Este es el color de la etiqueta
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
    /**
     * Capitaliza el valor de la etiqueta
     */
    allCaps: boolean
    /**
     * Color custom en la etiqueta
     */
    fontColor?: string
}

export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    color = 'text-primary',
    allCaps = false,
    fontColor
}: Props) => {
    return (
        <span className={`label ${size} ${color}`} style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
