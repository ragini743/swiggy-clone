# chunking 
# code splitting
# dynamic bundling
# lazy loading 
```
use
when send our project to roduction we saw only one js file.if have a large scale project then it will take a lot of time time to loading the page .so we need to use Lazy Loading using this we can split our code in chunks .and for different file we can create multiple js file . 

using Lazy Loading we can create different bundle for different file .
if we add Lazy Loading to a component then the component will not load until we not opent that component.
it is also known as on demand loading .
suppose we want to render <HealpSuport /> through lazy loading .
then const HelpSUpport = lazy(() => import("./help/HelpSUpport")) ;
```
### React context 
it is like a global object which is we can use anywhere inside our project it is used to avoid props drilling . 
we use useContext hook to access Context .