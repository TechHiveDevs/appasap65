
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateRecipes(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined"   />
<TextInput source="ingredients" variant="outlined"   />
<ReferenceInput label="diet" source="dietid" reference="diet">
        <AutocompleteInput variant="outlined" /* optionText="diet"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
