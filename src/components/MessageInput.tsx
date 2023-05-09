import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import { Box, Button, Input, InputProps } from "@chakra-ui/react";

interface MessageInputProps extends InputProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleKeyPress: KeyboardEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
  message: string;
}

const MessageInput = ({
  handleChange,
  handleKeyPress,
  handleSubmit,
  message,
}: MessageInputProps) => {
  return (
    <Box display="grid" gridTemplateColumns="1fr auto" gridGap={2} mt={2}>
      <Input
        placeholder="send message"
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        value={message}
      />
      <Button onClick={handleSubmit}>Go!</Button>
    </Box>
  );
};

export default MessageInput;
