import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";
import useProtectedPage from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { StyleCommentsCard, StylePostCard } from "../components/styled";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TextField } from "@material-ui/core";
import CommentListCard from "../components/CommentLisItem";

const PostsDetailPage = (props) => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  useProtectedPage();

  useEffect(() => {
    showPostDetail();
  }, []);

  const onChangeInputComment = (e) => {
    setInputComment(e.target.value);
  };

  const showPostDetail = () => {
    const authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${BASE_URL}/posts/${params.id}`, authorization)
      .then((res) => {
        console.log(res.data.post);
        setDetails([res.data.post]);
        setComments(res.data.post.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createComment = () => {
    const body = {
      text: inputComment,
    };

    const authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .post(`${BASE_URL}/posts/${params.id}/comment`, body, authorization)
      .then((res) => {
        alert("Comentário criado com sucesso!");
        showPostDetail();        
        setInputComment("");
      })
      .catch((err) => {
        alert("Ops! Não foi possível adicionar o comentário :(");
        console.error(err);
      });
  };

  const handleCommentVote = (commentId, direction) => {
    const body = {
      direction: direction,
    };

    const authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .put(
        `${BASE_URL}/posts/${params.id}/comment/${commentId}/vote`,
        body,
        authorization
      )
      .then((res) => {
        alert("Você votou!");
        showPostDetail();      
      })
      .catch((err) => {
        alert("Poxa, não foi possível votar no comentário :(");
        console.error(err);
      });
  };

  return (
    <div>
      {details.map((post) => {
        return (
          <StylePostCard>
            <Card variant="outlined">
              <CardContent style={{ height: "20vh", overflowY: "auto" }}>
                <Typography component="h1" color="textSecondary">
                  <strong>{post.title.toUpperCase()}</strong>
                </Typography>
              
                <Typography color="textSecondary">
                  [{post.username}]
                </Typography>
                <br />

                <Typography variant="body2" component="p">
                  {post.text}
                </Typography>
              </CardContent>
            </Card>
          </StylePostCard>
        );
      })}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr 3fr",
          gap: "2rem",
          margin: "1rem",
        }}
      >
        <TextField
          onChange={onChangeInputComment}
          value={inputComment}
          variant="outlined"
          margin="normal"
          required
          name="description"
          label="Insira aqui o seu comentário"
          id="description"
          autoFocus
        />

        <Button onClick={createComment}>
          <AddCircleIcon style={{ fontSize: 50, color: "#0079d3" }} />
        </Button>
      </div>

      {comments.map((comment) => {
        return (
          <StyleCommentsCard key={comment.id}>
            <CommentListCard
              comment={comment}
              handleCommentVote={handleCommentVote}
            />
          </StyleCommentsCard>
        );
      })}
    </div>
  );
};

export default PostsDetailPage;
