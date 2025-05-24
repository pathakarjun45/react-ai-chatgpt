import Answer from './Answers';
const QuestionAnswer=({item,index})=>{
    return(
        <>
            <div key={index + Math.random()} className={item.type == 'q' ? 'flex justify-end' : ''}>
                    {
                      item.type == 'q' ?
                        <li key={index + Math.random()}
                          className='text-right px-3 py-1 bg-red-100 dark:bg-zinc-700 border-none rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit max-w-xs"'>
                            <Answer ans={item.text} totalResult={1} index={index} type={item.type} /></li>
                        : item.text.map((ansItem, ansIndex) => (
                          <li key={ansIndex + Math.random()} className='text-left p-1'><Answer ans={ansItem} totalResult={item.length} type={item.type} index={ansIndex} /></li>

                        ))
                    }
                  </div>
        </>
    )
}

export default QuestionAnswer;