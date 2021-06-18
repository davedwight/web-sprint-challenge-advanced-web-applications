import axiosWithAuth from "../helpers/axiosWithAuth";

export const editColorService = (editColor) => {
    // const { id } = props.match.params;
    console.log("edit color props: ", editColor);

    // axiosWithAuth()
    //     .put(`/api/colors/${id}`, )
    // return value to edit
};

export const deleteColorService = (color) => {
    console.log("color to delete: ", color);
    axiosWithAuth()
        .delete(`/api/colors/${color.id}`)
        .then(res => {
            console.log("Successfully Deleted: ", res)
        })
        .catch(err => {
            console.log(err);
        })
};