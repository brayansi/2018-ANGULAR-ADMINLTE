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
  <li><a href="">header.component.ts</a></li>
  <li><a href="">menu.component.ts</a></li>
  <li><a href="">footer.component.ts</a>
    <pre>
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
        reserved.
      </footer>
    </pre>
  <li><a href="">settings.component.ts</a></li>
  <li><a href="">index.html</a></li>
  <li><a href="">app.component.ts</a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ol>
Nota: o parâmetro --spec=false não gera os arquivos de teste para os componentes
https://pt.linkedin.com/pulse/criando-um-projeto-angular-4-com-template-adminlte-soares-bentes
