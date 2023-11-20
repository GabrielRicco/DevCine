import React from "react";

interface IDescriptionProps {
    className: string

}

export function DescriptionCine (props: IDescriptionProps): React.ReactElement  {
    console.log(props)
    
    return(
        <div className="DescriptionText">
            <h1>Bem-vindo à nossa Locadora de Filmes Online, onde a magia do cinema encontra a conveniência do streaming!</h1>
                <p>Explore um vasto catálogo de filmes que abrange desde clássicos intemporais até os lançamentos mais recentes,<br/>
                tudo na ponta dos seus dedos. Desfrute da emoção de uma noite de cinema sem sair de casa, escolhendo entre uma variedade de gêneros e descobrindo novos favoritos a cada clique.<br/>
                Com a nossa plataforma intuitiva, você está no controle total da sua experiência cinematográfica. Prepare-se para uma jornada única no mundo do entretenimento, onde a diversão nunca tem fim.<br/>
                Aperte o play e mergulhe no universo mágico da sétima arte, sem sair do conforto do seu lar. Seja bem-vindo à sua nova sala de cinema virtual!</p> 
        </div>
    )
}
