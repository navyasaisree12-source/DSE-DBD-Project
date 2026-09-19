import { useState } from "react";
import "./Polls.css";

function Polls() {
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: "Which day should the society conduct the monthly meeting?",
      options: [
        { text: "Saturday", votes: 18 },
        { text: "Sunday", votes: 25 },
        { text: "Friday", votes: 7 },
      ],
      voted: false,
      selected: "",
    },
    {
      id: 2,
      question: "Which facility should be improved next?",
      options: [
        { text: "Gym", votes: 20 },
        { text: "Children's Play Area", votes: 15 },
        { text: "Swimming Pool", votes: 22 },
      ],
      voted: false,
      selected: "",
    },
    {
      id: 3,
      question: "Should visitor parking be reserved for guests?",
      options: [
        { text: "Yes", votes: 30 },
        { text: "No", votes: 12 },
      ],
      voted: false,
      selected: "",
    },
  ]);

  function selectOption(pollId, option) {
    setPolls((currentPolls) =>
      currentPolls.map((poll) =>
        poll.id === pollId
          ? { ...poll, selected: option }
          : poll
      )
    );
  }

  function submitVote(pollId) {
    setPolls((currentPolls) =>
      currentPolls.map((poll) => {
        if (poll.id !== pollId || !poll.selected || poll.voted) {
          return poll;
        }

        return {
          ...poll,
          voted: true,
          options: poll.options.map((option) =>
            option.text === poll.selected
              ? { ...option, votes: option.votes + 1 }
              : option
          ),
        };
      })
    );
  }

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Polls</h1>
          <p>Participate in society polls and share your opinion.</p>
        </div>
      </div>

      <div className="polls-list">
        {polls.map((poll) => {
          const totalVotes = poll.options.reduce(
            (total, option) => total + option.votes,
            0
          );

          return (
            <div className="poll-card" key={poll.id}>
              <div className="poll-header">
                <span className="poll-icon">🗳️</span>

                <span className="poll-status">
                  {poll.voted ? "Voted" : "Active"}
                </span>
              </div>

              <h2>{poll.question}</h2>

              <div className="poll-options">
                {poll.options.map((option) => {
                  const percentage =
                    totalVotes > 0
                      ? Math.round(
                          (option.votes / totalVotes) * 100
                        )
                      : 0;

                  return (
                    <button
                      key={option.text}
                      className={`poll-option ${
                        poll.selected === option.text
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        !poll.voted &&
                        selectOption(poll.id, option.text)
                      }
                      disabled={poll.voted}
                    >
                      <div className="poll-option-top">
                        <span>{option.text}</span>

                        {poll.voted && (
                          <span>{percentage}%</span>
                        )}
                      </div>

                      {poll.voted && (
                        <div className="poll-progress">
                          <div
                            className="poll-progress-fill"
                            style={{
                              width: `${percentage}%`,
                            }}
                          ></div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {!poll.voted && (
                <button
                  className="vote-button"
                  disabled={!poll.selected}
                  onClick={() => submitVote(poll.id)}
                >
                  Submit Vote
                </button>
              )}

              {poll.voted && (
                <div className="vote-success">
                  ✓ Your vote has been recorded.
                </div>
              )}

              <div className="poll-total">
                {totalVotes} total votes
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Polls;