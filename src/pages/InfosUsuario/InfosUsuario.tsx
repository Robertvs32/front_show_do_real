import styles from '@/pages/InfosUsuario/infosUsuario.module.css'
import DataLogo from '@/shared/dataLogo/DataLogo'
import LinhaSeparador from '@/shared/linhaSeparador/LinhaSeparador'
import Title from '@/shared/title/Title'
import TextChaveValor from '@/shared/textChaveValor/TextChaveValor'
import BtnReturn from '@/shared/btnReturn/BtnReturn'
import ModalConfirm from '@/shared/modalConfirm/ModalConfirm'

export default function InfosUsuario(){
    return(
        <div className={styles.infosUsuario}>

            <ModalConfirm
                text="Ola, awdadadw"
            />

            <DataLogo/>

            <BtnReturn
                path="a"
            />
            
            <Title
            title="Informações do usuário"
            />

            <LinhaSeparador/>

            <TextChaveValor
                chave="Nome"
                valor="Irineu"
            />

            <TextChaveValor
                chave="Email"
                valor="irineu@gmail.com"
            />

            <TextChaveValor
                chave="Data de criação"
                valor="12/04/2023"
            />

            <TextChaveValor
                chave="Situacao"
                valor="Ativo"
            />

            <LinhaSeparador/>

            <button className={styles.btnDesativar}>
                Desativar usuário
            </button>

            {false && (
                <button className={styles.btnAtivar}>
                    Ativar usuário
                </button>
            )}
            

        </div>
    )
}