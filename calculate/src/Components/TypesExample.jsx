import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TypesExample = () => {
  const [result, setResult] = useState(0);
  

  return (
    <>
      <input type='text' style={{borderRadius:'12px',width:'25%',height:'60px',outlineColor:'blue',marginTop:'20px',fontSize:'20px',marginLeft:'50px'}}></input>
<div className="content" style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign:'center',marginLeft:'50px'}}>
  <div className="btn-group-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>AC</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>7</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>4</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>1</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>cos</button>

  </div>
  <div className='btn-group-2' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2px' }}>
  <button style={{ width: '  100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>X</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>8</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>5</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>2</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>sin</button>
   </div>
  <div className='btn-group-3' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2px' }}>
  <button style={{ width: '  100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>%</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>9</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>6</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>3</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>0</button>
  </div>
  <div className='btn-group-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2px' }}>
  <button style={{ width: '  100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>/</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>*</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>-</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>+</button>
    <button style={{ width: '100px', height: '50px', background: '#0D77B0', borderRadius: '10px', boxShadow: '5px 5px 20px rgba(0,0,0,.2)', color: '#fff', fontSize: '28px', fontWeight: '600', borderColor: '#0D77B0', margin: '1px' }}>.</button>
  </div>
  <div className='btn-group-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}> 
  </div>
</div>
</>
  );
};

export default TypesExample;
