
interface CommentFormProps {
    onSubmit: (content: string) => Promise<void>;
    isSubmitting: boolean;
}

function CommentForm({onSubmit, isSubmitting}: CommentFormProps) {
  return (
    <div>CommentForm</div>
  )
}

export default CommentForm