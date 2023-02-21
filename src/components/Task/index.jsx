import classNames from 'classnames';

const Task = () => (
  <section
    className={classNames(
      'h-screen px-4 lg:px-28 py-16 relative overflow-hidden',
      'xl:grid grid-cols-2 gap-4',
      'bg-yellow-50 blur-[0.3px]'
    )}
  >
    <div className="flex flex-col justify-between">
      <h1 className="text-primary font-bold text-5xl sm:text-7xl lg:text-[5.4rem] lg:leading-[0.85]">
        Create this <br />
        component
      </h1>
      <p
        className={classNames(
          'text-secondary text-xl sm:text-2xl lg:text-[1.7rem] leading-tight',
          'max-w-[70%] my-12 sm:my-24 xl:my-0'
        )}
      >
        Use component &lt;Task&gt; to create layout and style.scss to
        write your css, additionally you can use Tailwind CSS.
      </p>
      <p className="text-secondary text-lg sm:text-xl">increas.io</p>
    </div>

    <div
      className={classNames(
        'absolute inset-y-0 right-28 w-1/3 rounded-[40%] rotate-45 -z-10',
        'bg-gradient-to-t from-yellow-75 via-orange to-pink blur-[50px] ',
        'shadow-[10px_45px_400px] shadow-orange'
      )}
    />
  </section>
);

export default Task;
