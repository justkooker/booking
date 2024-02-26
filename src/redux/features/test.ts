import { createSlice } from '@reduxjs/toolkit';

interface ITest {
  isTesting: boolean;
}
const initialState: ITest = {
  isTesting: true
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {}
});
export const {} = testSlice.actions;
export default testSlice.reducer;
