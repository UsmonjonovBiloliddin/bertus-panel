const TextArea = ({ label, height }) => {
	return (
		<div className="form-floating m-3">
			<textarea
				className="form-control"
				placeholder={label}
				style={{ height: height }}
			></textarea>
			<label htmlFor="floatingTextarea2">{label}</label>
		</div>
	);
};

export default TextArea;
