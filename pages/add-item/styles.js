import styled from 'styled-components';


const AddNewItem = styled.aside`
   max-width: 480px;
   margin: 2rem 1rem;
   padding:1rem;
   header{
       margin-bottom: 2rem;
   }
   h2{
       font-size:2.5rem;
       font-weight: 600;
       letter-spacing: -2px;
   }
   textarea{
       resize: none;
       border:none;
       border-radius: 2px;
       box-shadow:0 0 2px 1px  #d0d0d0;
       color:#5a5b66;
       font-size:14px;
       padding: 0.25rem;
   }
   input, textarea{
       width:100%;
   }
   label{
    display:block;
    margin:0;
    font-weight: bold;
}
`;







 

export default AddNewItem