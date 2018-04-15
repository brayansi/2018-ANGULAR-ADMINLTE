# 2018-angular5-adminlte2.4

## Tutorial: Integração adminlte 2.4 com angular 5

### Instalação Amgular 4
<ol>
  <li>Instale o <a href="https://nodejs.org">NodeJs</a>("node -v" versão v9.2.0)</li>
  <li>npm install -g angular-cli</li>
  <li>ng new projeto</li>
  <li>ng serve -o</li>
</ol> 

### instalação Adminlte

<ol>
  <li>npm install --save admin-lte</li>
  <li>npm install --save jquery</li>
</ol> 

### Integração

<ol>
  <li>ng g c header --spec=false</li>
  <li>ng g c footer --spec=false</li>
  <li>ng g c settings --spec=false</li>
  <li>ng g c menu --spec=false</li>
</ol>

#### Copie os siguintes codigos para seu peojeto

<ol>
  <li><a href="https://github.com/brayansi/2018-angular5-adminlte2.4/blob/master/crudProduct/src/app/header/header.component.html">header.component.ts</a></li>
  <li><a href="https://github.com/brayansi/2018-angular5-adminlte2.4/blob/master/crudProduct/src/app/menu/menu.component.html">menu.component.ts</a></li>
  <li><a href="https://github.com/brayansi/2018-angular5-adminlte2.4/blob/master/crudProduct/src/app/footer/footer.component.html">footer.component.ts</a>
  <li><a href="https://github.com/brayansi/2018-angular5-adminlte2.4/blob/master/crudProduct/src/app/settings/settings.component.html">settings.component.ts</a></li>
  <li><a href="https://github.com/brayansi/2018-angular5-adminlte2.4/blob/master/crudProduct/src/index.html">index.html</a></li>
  <li><a href="https://github.com/brayansi/2018-angular5-adminlte2.4/blob/master/crudProduct/src/app/app.component.html">app.component.ts</a></li>
</ol>

#### alterar o angular-cli.json;
<ol>
  <li>
    "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/font-awesome/css/font-awesome.css",
        "../node_modules/jvectormap/jquery-jvectormap.css",
        "../node_modules/admin-lte/dist/css/AdminLTE.min.css",
        "../node_modules/admin-lte/dist/css/skins/_all-skins.min.css"
      ]
  </li>
  <li>
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/admin-lte/dist/js/adminlte.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js",
        "../node_modules/fastclick/lib/fastclick.js",
        "../node_modules/jquery-slimscroll/jquery.slimscroll.js"
     ]
  </li>
</ol>
Nota: o parâmetro --spec=false não gera os arquivos de teste para os componentes
https://pt.linkedin.com/pulse/criando-um-projeto-angular-4-com-template-adminlte-soares-bentes
