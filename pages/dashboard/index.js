import { useSession, signIn, signOut } from "next-auth/react"

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/user')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default function Component({ posts }) {
  const { data: session } = useSession();

  return (
    <div className="container my-4">
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <p>
            {session.user.fname} {session.user.lname}
          </p>
          <button onClick={() => signOut()} className="btn btn-danger">
            Sign out
          </button>
          <div className="table-responsive mt-4">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Status</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {posts.users.map((post, i) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.studentid}</td>
                    <td>{post.firstname}</td>
                    <td>{post.lastname}</td>
                    <td>{post.username}</td>
                    <td>{post.password}</td>
                    <td>{post.status}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning mr-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.502 1.94a.5.5 0 0 1 0 .706L13.459 3.69l-2-2L12.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L5.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </button>&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn btn-danger"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn()} className="btn btn-primary">
            Sign in
          </button>
        </>
      )}
    </div>
  );
}