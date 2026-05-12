import IconSeta from '@/assets/icons/seta-direita.png'
import styles from '@/features/usuarios/components/prevUsuario/prevUsuario.module.css'

export default function PrevUsuario({name, dataCriacao}: {name: string, dataCriacao: string}){
    return(
        <button className={styles.prevUsuario}>
            <div className={styles.prevUserInfos}>
                <p>{name}</p>
                <p>{dataCriacao}</p>
            </div>
            
            <img src={IconSeta} alt="Icone seta - Acessar dados usuario" />

        </button>
    )
}