import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const SimpleCard = (props) => {
  const upVote = (direction) => {
    if (props.post.userVoteDirection === 1) {
      props.handleVotePost(props.post.id, 0);
    } else {
      props.handleVotePost(props.post.id, 1);
    }
  };

  const downVote = (direction) => {
    if (props.post.userVoteDirection === -1) {
      props.handleVotePost(props.post.id, 0);
    } else {
      props.handleVotePost(props.post.id, -1);
    }
  };

  return (
    <Card variant="outlined">
      <CardActions>
        <Button>
          <ArrowUpwardIcon
            onClick={upVote}
            color={props.post.userVoteDirection === 1 ? "primary" : "disabled"}
          />
          <span>
            <strong>{props.votesCount}</strong>
          </span>
          <ArrowDownwardIcon
            onClick={downVote}
            color={
              props.post.userVoteDirection === -1 ? "secondary" : "disabled"
            }
          />
        </Button>
      </CardActions>
      <CardContent style={{ height: "20vh", overflowY: "auto" }}>
        <Typography component="h1" color="textSecondary">
          <strong>{props.title.toUpperCase()}</strong>
        </Typography>

        <Typography color="textSecondary">[{props.username}]</Typography>
        <br />

        <Typography variant="body2" component="p">
          {props.text}
          <br />
        </Typography>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          onClick={props.onClickCard}
          size="small"
          style={{ backgroundColor: "#0079d3", color: "#fff" }}
        >
          Detalhes
        </Button>
        <Button
          style={{ backgroundColor: "#ff5500", color: "#fff" }}
          onClick={props.onClickCard}
          size="small"
        >
          {props.commentsCount} Comentários
        </Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
