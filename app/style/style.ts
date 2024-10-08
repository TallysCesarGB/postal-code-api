import { styled, YStack, Text, Input } from 'tamagui';

export const StyledYStack = styled(YStack, {
  backgroundColor: '#fff',
  flex: 1,
  //   jc: 'center',
  ai: 'center',
  marginTop: 40,
});

export const StyledTitle = styled(Text, {
  color: '#333',
  fontSize: 24,
});

export const StyledInput = styled(Input, {
  width: '40%',
  padding: 10,
  backgroundColor: '#ececec',
  borderColor: '#ececec',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 20,
  marginTop: 30,
  color: '#000',
  fontSize: 16,
  fontWeight: '800',
});

export const StyledResult = styled(Text, {
  fontSize: 32,
  fontWeight: 500,
});
