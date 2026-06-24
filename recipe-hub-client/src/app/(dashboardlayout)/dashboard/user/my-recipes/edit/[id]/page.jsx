import { singleRecipeFetch } from "@/lib/api/recipe";
import EditForm from "../EditForm";

const RecipeEditPage = async ({ params }) => {
  const { id } = await params;
  const { data: recipe } = await singleRecipeFetch(id);
  console.log(recipe);
  return (
    <div>
      <EditForm recipe={recipe} />
    </div>
  );
};

export default RecipeEditPage;
