import Navegacao from "./componentes/navbar";

export default function Home(){
  return ( <> 
  <Navegacao />
          </>
        );
}

// o export default function.... exports the index page on localhost: 3000, thats means the default page
// on the l2, he needs a empty tag (tag PAI DOS PAIS) for dont break the code
// o react dont acept do process more than 1 element, for this, the empty tahg(TAG PAI DOS PAIS), below this tag, you can use anyone others tags 
//TAREFA, export the SITE TABAJARA to this directory, updating the code and frameworks