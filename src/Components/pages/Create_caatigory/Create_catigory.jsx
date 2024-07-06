import React, { useEffect } from "react";
import { useCreateCategoryMutation } from "../../context/Api/Catigory";
import { useGetInputValue } from "../../Hooks/useGetinputValue";
import { toast } from "react-toastify";

let initialState = {
  title: "",
};

const CreateCategory = () => {
  const [CreateCategory, { isLoading, isSuccess }] =
    useCreateCategoryMutation();
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    CreateCategory(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialState);
      toast.success("Category Created");
    }
  }, [isSuccess]);

  return (
    <div>
      <form onSubmit={handleCreate} className="create__category">
        <h1 className="create__category__title">Create Category</h1>
        <input
          type="text"
          className="create__category__input"
          placeholder="Category name"
          onChange={handleChange}
          name="title"
        />
        <button
          className="create__category__btn"
          disabled={isLoading ? "Creating..." : ""}
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;