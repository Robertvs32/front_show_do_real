import styles from '@/pages/Home/home.module.css';
import DataLogo from '@/shared/dataLogo/DataLogo';
import BtnLogout from '@/features/auth/components/btnLogout/BtnLogout';
import CardNavigate from '@/pages/Home/components/cardNavigate/CardNavigate';
import IconUsuarios from '@/assets/icons/usuarios.png';
import LinhaSeparador from '@/shared/linhaSeparador/LinhaSeparador';

export default function Home(){
    return(
        <div className={styles.home}>
            <DataLogo/>

            <div className={styles.bemvindo}>
                <p>Bem vindo</p>
                <p style={{color: 'blue'}}>Pedro!</p>
            </div>

            <BtnLogout/>

            <LinhaSeparador/>

            <CardNavigate
                icon={IconUsuarios}
                name="Usuarios"
            />

            <CardNavigate
                icon={IconUsuarios}
                name="Produtos"
            />

            <CardNavigate
                icon={IconUsuarios}
                name="Vencimentos"
            />
            
        </div>
    )
}