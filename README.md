# Quiz-DAZN

#### Running - 

1. run `npm i` or `npm run init`
2. run `npm start`
3. navigate to `localhost:3000` if it did not automatically open

OR 

1. run `npm i` or `npm run init`
2. run `npm run build`
3. open the `index.html` from the `build` in the browser

---

### Cross-browser compatibility

1. Chrome (The browser used for development)
2. Edge
3. Firefox

---

#### Application flow

The main 3 components are 

```typescript
<BeginButton>
<QuizWithData>
<Result>
```

and at any given momnet only a few will be rendered to the screen depending on the current state of the quiz.

The options for that are:
1. First visit - Only the ```<BeginButton>``` is on the screen, no quiz or results
2. The user is answering a quiz so only the ```<QuizWithData>``` is rendered to the screen
3. The user has just finished a quiz, so The ```<Result>``` is shown, alongside the ```<BeginButton>``` on top to start another quiz

Each of the 3 is looking at one of the data stores to know whether to be shown or not, for example both the ```<BeginButton>``` and the ```<QuizWithData>``` are looking at the same store (via a hook) ```QuizStore```

