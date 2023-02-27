import styled from "@emotion/styled";
import { Form as FormikForm } from 'formik';


export const Form = styled(FormikForm)`
width: 300px;
padding: 8px;
border: 1px solid black;
display: flex;
flex-direction: column;
gap: 10px;`

export const FormField = styled.label`
display: flex;
flex-direction: column;`

export const AddBtn = styled.button`
width:150px;
margin: 0 auto;`