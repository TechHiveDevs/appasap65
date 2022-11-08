
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditDiet(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="startdate" variant="outlined"   />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}