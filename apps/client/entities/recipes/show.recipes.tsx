
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowRecipes(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="name" />
<TextField source="ingredients" />
<ReferenceField source="dietid" reference="diet" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}