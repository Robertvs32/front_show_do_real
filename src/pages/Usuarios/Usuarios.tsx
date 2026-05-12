import DataLogo from "@/shared/dataLogo/DataLogo"
import styles from '@/pages/Usuarios/usuarios.module.css'
import BtnReturn from "@/shared/btnReturn/BtnReturn"
import Title from "@/shared/title/Title"
import LinhaSeparador from "@/shared/linhaSeparador/LinhaSeparador"
import BtnLink from "@/shared/btnLink/BtnLink"
import IconNovoUser from '@/assets/icons/novouser.png'
import PrevUsuario from "@/features/usuarios/components/prevUsuario/PrevUsuario"

export default function Usuarios(){
    return(
        <div className={styles.usuarios}>
            <DataLogo/>

            <BtnReturn
                path="/home"
            />

            <div className={styles.titleCadastroContainer}>
                <Title
                    title="Usuarios"
                />
                
                <BtnLink
                    path="aaa"
                    text="Cadastrar usuario"
                    icon={IconNovoUser}
                />
            </div>

            <LinhaSeparador/>

            <PrevUsuario
                name="Joao"
                dataCriacao="joao@gmail.com"
            />

            <PrevUsuario
                name="Joao"
                dataCriacao="joao@gmail.com"
            />

            <PrevUsuario
                name="Joao"
                dataCriacao="joao@gmail.com"
            />

            <PrevUsuario
                name="Joao"
                dataCriacao="joao@gmail.com"
            />

            <PrevUsuario
                name="Joao"
                dataCriacao="joao@gmail.com"
            />

            <PrevUsuario
                name="Joao"
                dataCriacao="joao@gmail.com"
            />

            <PrevUsuario
                name="Joao"
                dataCriacao="joao@gmail.com"
            />

        </div>
    )
}