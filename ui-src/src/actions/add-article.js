import { ADD_ARTICLE,DELETE_ARTICLE } from "../constants/action-types";

export function addArticle(article) {
  return { type: ADD_ARTICLE, payload: article };
}
export function deleteArticle(id) {
	  return { type: DELETE_ARTICLE, payload: id };
}