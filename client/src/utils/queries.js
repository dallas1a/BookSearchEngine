import gql from 'graphql-tag';
//gets current users saved books based on their login information and how many they have saved
export const GET_ME = gql`
{
  me {
    _id
    username
    email
    bookCount
    savedBooks {
        bookId
        authors
        title
        description
        image
        link
    }
  }
}
`;