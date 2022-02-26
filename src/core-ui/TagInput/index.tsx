import { FC, Fragment, useState, useEffect } from 'react';
import { Chip, Icon } from 'core-ui';
import { className } from './methods';
import { TagInputProps } from './props';

export const TagInput: FC<TagInputProps> = (props: TagInputProps) => {
  const {
    size,
    color,
    rounded,
    defaultValues,
    handleChange,
    ...restProps
  }: TagInputProps = props;

  const [value, setValue] = useState<string>();

  const [tags, setTags] = useState<Array<string>>([]);

  useEffect(() => defaultValues && setTags(defaultValues), [defaultValues]);

  const handleChangeValue = (e) => setValue(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setTags([...tags, e.target.value]);

      setValue('');

      handleChange({
        target: { name: props.name, value: [...tags, e.target.value] },
      });
    }
  };

  const handleTagDelete = (index: number) => {
    setTags(tags.filter((_, indx) => index !== indx));

    handleChange({
      target: {
        name: props.name,
        value: tags.filter((_, indx) => index !== indx),
      },
    });
  };

  return (
    <Fragment>
      <input
        value={value}
        className={className`${props}`}
        onChange={handleChangeValue}
        onKeyPress={handleKeyPress}
        {...restProps}
      />
      {tags.map((tag, index) => (
        <>
          <Chip color='dark' rounded>
            {tag}
            &nbsp;
            <Icon name='times' onClick={() => handleTagDelete(index)} />
          </Chip>{' '}
          &nbsp;
        </>
      ))}
    </Fragment>
  );
};

export * from './props';
