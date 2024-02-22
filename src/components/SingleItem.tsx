import styled from 'styled-components';

type SingleItemProps = {
  name: string;
  edit: () => void;
  deleteItem: () => void;
};



function SingleItem({ name, edit, deleteItem }: SingleItemProps) {
  return (
    <div>
    <Container>
   <Tableview>
    <TableRow>
      <TableCell>{name}
     
        <Button onClick={() => edit()}>Edit</Button>
       <Delete onClick={() => deleteItem()}>Delete</Delete>
       
      </TableCell>
    </TableRow>
    </Tableview>
    </Container>
    </div>
    
  );
}
const Container = styled.div`
  height: 8vh;
  // display:flex;
  justify-content:center;
  align-item:center;
  // padding-left:72px;
`;
const Tableview = styled.div`
  background-color:rgb(205, 200, 200);
  width: 300px;
  border-radius:5px;
  
`;
const TableRow = styled.tr`
  // border-bottom: 1px solid black;
  // padding-right:200px;
`;

const TableCell = styled.td`
  padding: 8px;
  font-size:18px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float:left;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(12, 101, 4);
  }
`;
const Delete = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color:red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float:left;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(142, 9, 9);
  }
`;




export default SingleItem;
