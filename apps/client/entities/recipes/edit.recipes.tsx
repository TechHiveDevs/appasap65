
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditRecipes(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined"   />
<TextInput source="ingredients" variant="outlined"   />
<ReferenceInput label="diet" source="dietid" reference="diet">
        <AutocompleteInput variant="outlined" /* optionText="diet"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}