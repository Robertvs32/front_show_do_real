import styles from '@/features/leitor/components/Leitor/leitor.module.css'
import * as Zxing from '@zxing/browser'
import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef } from 'react'

interface PropsLeitor{
    setCodigo: Dispatch<SetStateAction<string>>,
    setLeitorVisivel: Dispatch<SetStateAction<boolean>>
}

export default function Leitor({setCodigo, setLeitorVisivel}: PropsLeitor){

    //CRIA REFERENCIA
    const videoRef = useRef<HTMLVideoElement>(null);
    // const leitorRef = useRef<Zxing.IScannerControls | null>(null)

    const constraints: MediaStreamConstraints = {
        video: {
            facingMode: 'environment',
            width: {ideal: 400},
            height: {ideal: 720}
        }
    }
    
    useEffect(() => {

        console.log("montou")

        let leitor;
        let estaMontado = true;
    
        const iniciarLeitor = async () => { 

            console.log("chamou a funcao")

            try{
                const instanciaLeitor = new Zxing.BrowserMultiFormatReader();

                leitor = await instanciaLeitor.decodeFromConstraints(
                constraints,
                videoRef.current,
                (result, error) => {  

                    if(result){
                            const texto = result.getText() 
                            setCodigo(texto)
                            setLeitorVisivel(false);
                            leitor.stop()

                            //GARANTIR QUE VAI FECHAR MESMO DIRETO NO HARDWARE
                            const stream = videoRef.current.srcObject as MediaStream;
                            stream.getTracks().forEach(track => {
                                track.stop();
                            });
                            videoRef.current.srcObject = null;
                        }
                    }
                )

                if(!estaMontado){
                    leitor.stop()
                }

            }catch(error){
                alert(error)
            }

        }
        
        const timer = setTimeout(() => {
            iniciarLeitor();
        }, 500)
        
        return () => {

            console.log("Desmontou")

            clearTimeout(timer)
        }

    }, [])

    return(
        <div className={styles.leitor}>

            <button 
                className={styles.btnFecharLeitor}
                onClick={() => {
                    setLeitorVisivel(false)
                }}
            >
                Fechar leitor
            </button>

            <div className={styles.videoContainer}>
                <video 
                    className={styles.videoLeitor}
                    ref={videoRef}
                    muted={true}
                    playsInline={true}
                >
                </video>
            </div>
            
        </div>
    )
}