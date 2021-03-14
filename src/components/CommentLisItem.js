import React from "react";
import { Button, Card, CardActions } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AddCommentIcon from "@material-ui/icons/AddComment";

const CommentListCard = (props) => {
  const upVote = () => {
    if (props.comment.userVoteDirection === 1) {
      props.handleCommentVote(props.comment.id, 0);
    } else {
      props.handleCommentVote(props.comment.id, 1);
    }
  };

  const downVote = () => {
    if (props.comment.userVoteDirection === -1) {
      props.handleCommentVote(props.comment.id, 0);
    } else {
      props.handleCommentVote(props.comment.id, -1);
    }
  };

  return (
    <Card variant="outlined">
      <h4>{props.comment.username.toUpperCase()}</h4>
      <p>"{props.comment.text}"</p>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button>
          <ArrowUpwardIcon
            onClick={upVote}
            color={
              props.comment.userVoteDirection === 1 ? "primary" : "disabled"
            }
          />
          <p>{props.comment.votesCount}</p>
          <ArrowDownwardIcon
            onClick={downVote}
            color={
              props.comment.userVoteDirection === -1 ? "secondary" : "disabled"
            }
          />
        </Button>

        <Button disabled>
          <AddCommentIcon style={{ color: "#0079d3" }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CommentListCard;
