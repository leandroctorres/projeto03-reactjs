import HelloWorldCssInJSWithProps from './HelloWorldCssInJSWithProps';
import HelloWorldCssInJs from './HelloWorldCssInJs';
import HelloWorldImportandoArquivoCss from './HelloWorldImportandoArquivoCss';
import HelloWorld from './HelloWorld';

const divStyle = {
	color: 'red'
};
function HelloWorldComponent() {
	return <div style={divStyle}>Hello World!</div>;
}

function App() {
  return (
		<div>
		  <h2>Trabalhando com estilos em elementos e componentes</h2>

			<div>
				<h3>1ª Maneira: Inline. Usando a tag style.</h3>

				Exemplo 1:
				<p>{HelloWorldComponent()}</p>

				Exemplo 2:
				<HelloWorld style={{ marginTop: '10px' }} />
		  </div>

			<div>
				<h3>
					2ª Maneira: Trabalhando com classes.
					Maneira mais modularizada de se trabalhar com estilização de componentes.
					Definir um arquivo css, e importar esse arquivo dentro do componente.
					Utilizar a tag Classname
				</h3>

				Exemplo 3:
				<HelloWorldImportandoArquivoCss style={{ marginTop: '10px' }} />
			</div>


			<div>
				<h3>
					3ª Maneira: CSS In JS. O css é criado dentro do JavaScript. E o JavaScript gera css para nós.
				</h3>
				Exemplo 4:
				<HelloWorldCssInJs style={{ marginTop: '10px' }} />

				Exemplo 5:
				<HelloWorldCssInJSWithProps style={{ marginTop: '10px' }} />
			</div>


		</div>
  );
}

export default App;
