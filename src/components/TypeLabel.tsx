import React from 'react'
import { pokemonTypeColors } from '../../public/data/types';
type Props = {
        type: string
}

const TypeLabel = ({type}: Props) => {
    return (
        <p className="w-[80px] p-1 rounded-lg border border-slate-300 text-center text-slate-50" style={{ backgroundColor: pokemonTypeColors[type] }}>{type}</p>
    )
}

export default TypeLabel