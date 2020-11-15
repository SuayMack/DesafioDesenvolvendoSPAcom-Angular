# Desenvolvendo SPA com Angular - spaangular

# Criando um novo projeto - Roteiro

```bash
ng new spaangular --prefix=spa
```

--prefix não é obrigatório, porém todos os componentes que criarmos virão com o prefixo spa, diferenciando esses componentes de outros importados. Você pode escolher o nome do prefixo.

```bash
? Would you like to add Angular routing? Yes		
? Which stylesheet format would you like to use? CSS	
```

Abra a pasta do projeto criado:

```bash
cd spaangular
```

Inicie o vscode:

```bash
code .
```

Inicie o terminal no vscode

Terminal 👉 New Terminal (ou ctrl ➕ shift ➕ ' )

Inicie o servidor, ele "observará" os arquivos. A cada mudança ele dá um "rebuild" na aplicação:

```bash
ng serve -o
```

# Instalando o Angular Material

```bash
ng add @angular/material
```

Escolha um tema para utilizar, vamos usar os estilos de tipografia globais Angular e usar os animations:

```bash
Deep Purple/Amber [ Preview: [https://material.angular.i](https://material.angular.i/)o?theme=deeppurple-amber ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
```

Reinicie o servidor:

ctrl ➕ C (2 vezes)

```bash
ng serve -o
```

# Criando componente header

```html
ng g c header
```

g = generate / c = component / header = nome do componente

Ao criar o componente, apague o arquivo header.component.spec.ts

Excluímos o arquivo header.component.spec.ts

Vamos definir nosso médulo header como inicial, pois como default a tela inicial é no arquivo app.component.ts, para isso vamos em app-routing.module.ts pois ele é o responsável por mapear as rotas.

Em app-routing.module.ts, const routes:

```bash
const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }
];
```

Caso ele não importe automaticamente, importe o componente:

```bash
import { HeaderComponent } from './header/header.component'; 
```

Em app 👉 app.component.html, apagamos tudo menos o:

```html
<router-outlet></router-outlet>
```

que serve para colocarmos os arquivos de rota e tudo ficar na mesma página

apagamos os arquivos app.component.spec.ts e header.components.spec.ts , já que não usaremos testes nesse projeto.

Com o servidor iniciado, verifique se o [localhost:4200](http://localhost:4200) diz: "header works!", funcionou! 🥳

## Adicionando componente Tollbar do Material Angular

Escolhemos o componente no site [https://material.angular.io/components/categories](https://material.angular.io/components/categories).

No nosso caso vamos no [Tollbar](https://material.angular.io/components/toolbar/overview).

Na aba API iremos importar o componente para nosso projeto, copie o import:

```tsx
import {MatToolbarModule} from '@angular/material/toolbar';
```

Cole no arquivo app.module.ts, e em imports, coloque o nome do componente:

```tsx
imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
```

Em Examples vamos escolher o Basic toolbar, em HTML copiamos seu código  e em header.component.html, tiramos o:

```tsx
<p>header works!</p>
```

E colocamos o código, como eu quero que fique com uma sombra no toolbar, coloco uma classe pronta do material mat-elevation-z4:

```html
<mat-toolbar class="mat-elevation-z4">
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button> 
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>
```

Como nosso componente tem um componente filho <mat-icon>, para nos antecipar de qualquer erro, faremos a importação do filho também, na barra lateral do Material, vamos em **Icon**, em **API** importaremos o **MatIconModule** do mesmo jeito que importamos o MatToolbarModule

```tsx
import {MatIconModule} from '@angular/material/icon';
```

```tsx
imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    MatToolbarModule,
		MatIconModule
  ],
```

Na página do Material:

Toolbar 👉 Examples 👉 < > 👉 CSS

Copie o código e cole em header.component.html:

```css
.example-spacer {
  flex: 1 1 auto;
}
```

Salve, reinicie o servidor, se necessário, e pronto!! 🥳🥳🥳🥳

![Desenvolvendo%20SPA%20com%20Angular%20-%20spaangular%2020e9781023f646ebab9ae14e3c28a005/Untitled.png](Desenvolvendo%20SPA%20com%20Angular%20-%20spaangular%2020e9781023f646ebab9ae14e3c28a005/Untitled.png)

# Criando componente footer

```css
ng g c footer
```

Em app.componente.html coloque o footer:

```html
<spa-footer></spa-footer>
```

Colocamos o texto do footer, colocamos o icone "favorite" ❤️  do material;

```html
<mat-toolbar>
    <span>Desenvolvido com
        <i>favorite</i>
        por <strong>PriscilaCSx</strong>
    </span>
</mat-toolbar>
```

quero o ❤️ fique vermelho e que fique no meio da frase, então vamos em styles.css:

```html
.red {
    color: rgb(277,94,107);
}
.v-middle {
    vertical-align: middle;
}
```

e no arquivo footer.component.html, em <i>, colocamos as classes:

```html
<mat-toolbar>
    <span>Desenvolvido com
        <i **class="material-icons md-18 red v-middle"**>favorite</i>
        por <strong>PriscilaCSx</strong>
    </span>
</mat-toolbar>
```

Colocamos a classe footer em <mat-toolbar> para estilizarmos o footer:

```html
<mat-toolbar **class="footer"**>
    <span>Desenvolvido com
        <i class="material-icons md-18 red v-middle">favorite</i>
        por <strong>PriscilaCSx</strong>
    </span>
</mat-toolbar>
```

Criamos a classe footer em footer.component.css, colocamos o footer no bottom da página, colocamos o texto no meio e a fonte pequena:

```css
.footer {
    position: fixed;
    bottom:0;

    display:flex;
    align-items: center;
    justify-content: center;
}
```

Salve, reinicie o servidor, se necessário, e pronto!! 🥳🥳🥳🥳

![Desenvolvendo%20SPA%20com%20Angular%20-%20spaangular%2020e9781023f646ebab9ae14e3c28a005/Untitled%201.png](Desenvolvendo%20SPA%20com%20Angular%20-%20spaangular%2020e9781023f646ebab9ae14e3c28a005/Untitled%201.png)

# Criando componente Nav

```bash
ng g c nav
```

Em app.componente.html coloque o footer:

```html
<router-outlet></router-outlet>
<spa-nav></spa-nav>
<spa-footer></spa-footer>
```

## Adicionando componente Sidenav do Material Angular

Importamos o modulo MatSidenavModule no arquivo app.module.ts:

```tsx
import {MatSidenavModule} from '@angular/material/sidenav';
```

Em imports:

```tsx
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
```

Como nosso componente tem um componente filho <mat-nav-list>, importaremos o MatListModule:

```tsx
import {MatListModule} from '@angular/material/list';
```

```tsx
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
```

No arquivo nav.component.html, colocamos o código HTML com classes, a propriedade  mode, para indicar a posição do sidenav, a propriedade opened (aberto), a propriedade fixedInViewport="true", para que apareça nosso sidenav, a propriedade fixedTopGap="64", para não ficar em cima do nosso header e a propriedade mat-list-item, para receber o estilo adequado e fique dentro da sidenav:

```html
<mat-sidenav-container class="container">   
    <mat-sidenav class="sidenav" mode="side" opened fixedInViewport="true" fixedTopGap="64">
        <mat-nav-list class="nav-list">
            <a mat-list-item>
                <i class="material-icons">
                    home
                </i>
                Inicio
            </a>
            <a mat-list-item>
                <i class="material-icons">
                    store
                </i>
                Produtos
            </a>
        </mat-nav-list>
    </mat-sidenav>    
</mat-sidenav-container>
```

Vamos estilizar nosso sidenav, no arquivo nav.component.css:

```css
.sidenav {
    background-color: #3F51B5;
    width: 8rem;
}

.sidenav a {
    color: #fff;
}

.sidenav i {
    padding-right: 10px;
}
```

No arquivo styles.css:

```css
@media (max-width: 599px){
    .mat-toolbar-row, .mat-toolbar-single-row {
        height: 64px;
    }
}
```

Salve, reinicie o servidor, se necessário, e pronto!! 🥳🥳🥳🥳

![Desenvolvendo%20SPA%20com%20Angular%20-%20spaangular%2020e9781023f646ebab9ae14e3c28a005/Untitled%202.png](Desenvolvendo%20SPA%20com%20Angular%20-%20spaangular%2020e9781023f646ebab9ae14e3c28a005/Untitled%202.png)

Em atualização 👩‍🔧