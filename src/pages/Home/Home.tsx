import styles from '@/pages/Home/home.module.css';
import DataLogo from '@/shared/dataLogo/DataLogo';
import BtnLogout from '@/features/auth/components/btnLogout/BtnLogout';
import CardNavigate from '@/pages/Home/components/cardNavigate/CardNavigate';
import IconUsuarios from '@/assets/icons/usuarios.png';
import LinhaSeparador from '@/shared/linhaSeparador/LinhaSeparador';
import { useContext } from 'react';
import { AuthContext } from '@/features/auth/contexts/AuthContext';

export default function Home(){

    const { objUser } = useContext(AuthContext);

    return(
        <div className={styles.home}>
            <DataLogo/>

            <div className={styles.bemvindo}>
                <p>Bem vindo</p>
                <p style={{color: 'blue'}}>{`${objUser?.nome}!`}</p>
            </div>

            <BtnLogout/>

            <LinhaSeparador/>

            {objUser.role == 'adm' && (
                <CardNavigate
                    icon={IconUsuarios}
                    name="Usuarios"
                    path="/usuarios"
                />
            )}

            <CardNavigate
                icon={IconUsuarios}
                name="Produtos"
                path="/produtos"
            />

            <CardNavigate
                icon={IconUsuarios}
                name="Vencimentos"
                path="/vencimentos"
            />
            
        </div>
    )
}