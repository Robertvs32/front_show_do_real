import styles from '@/features/produtos/components/InputCodigoBarra/inputCodigoBarra.module.css'
import IconCodigo from '@/assets/icons/codigo.png'
import IconCodigoAzul from '@/assets/icons/codigo_azul.png'
import type { SetStateAction, Dispatch } from 'react';

interface InputCodigoBarraProps{
    setLeitorVisible: Dispatch<SetStateAction<boolean>>
    codigo: string,
    setCodigo: Dispatch<SetStateAction<string>>
}

export default function InputCodigoBarra({setLeitorVisible, codigo, setCodigo}: InputCodigoBarraProps){

    const isMobile = window.innerWidth < 768;

    return(
        <div className={styles.inputCodigoBarra}>
            <div className={styles.containerIconCodeBar}>
                <img 
                    className={styles.iconCodeBar}
                    src={IconCodigo} 
                    alt="Icone codigo de barras" 
                />
            </div>

            <input 
                style={{
                    borderTopRightRadius: isMobile ? 0 : '4px',
                    borderBottomRightRadius: isMobile ? 0 : '4px'
                }}
                className={styles.inputCodeBar}
                type="text"
                placeholder="7891234421231"
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
            />

            {isMobile && (
                <button
                    className={styles.iconLeitor}
                    onClick={() => setLeitorVisible(true)}
                >
                    <img 
                        className={styles.imgIconLeitor}
                        src={IconCodigoAzul}
                        alt="Icone leitor codigo de barras"
                    />
                </button>
            )}
            
        </div>
    )
}