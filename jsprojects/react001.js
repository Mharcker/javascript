/*
<CapsLock>
    texto a ser passado para maiúsculas
</CapsLock>
*/
<CapsLock>meu nome é sla oq</CapsLock>
function CapsLock(props){
    const a = props.children;    
    const Caps = a.toUpperCase;
    return (
    <div>
        {Caps}
    </div>);
}