// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


// Create a react component
const App = () => {
  return (

    <div className="ui container comments">

<ApprovalCard>
  <div>
    <h4>Warning</h4>
  Are you sure you want to do this?
  </div>
  
</ApprovalCard>

      <ApprovalCard > 
        <CommentDetail  
          author ="Loi" 
          timeAgo="today at 4:45PM" 
          Content="Hey there" 
          avatar={faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard > 
        <CommentDetail  
          author ="Jen" 
          timeAgo="today at 7:45PM" 
          Content="Love This" 
          avatar={faker.image.avatar()}/>
       </ApprovalCard>

       <ApprovalCard > 
          <CommentDetail  
            author ="Boston" 
            timeAgo="Yesterday at 4:45PM" 
            Content="Dubai was LIT MAAAYNE" 
            avatar={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard >    
          <CommentDetail  
            author ="Beckett" 
            timeAgo="Today at 4:45PM" 
            Content="Hey there" 
            avatar={faker.image.avatar()}/>
        </ApprovalCard>
    </div>
    
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
