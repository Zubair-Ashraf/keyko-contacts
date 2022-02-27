import { Fragment, FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Icon,
  Divider,
  Grid,
  TextField,
  TagInput,
  Button,
} from 'core-ui';
import { Contact } from 'interfaces/models';
import { ContactFormProps } from './props';
import { INITIAL_CONTACT } from '../../constants';

export const ContactForm: FC<ContactFormProps> = (props: ContactFormProps) => {
  const {
    initialValues,
    onValueChange,
    reset,
    onCreate,
    onUpdate,
    onDelete,
  }: ContactFormProps = props;

  const { id: contactId } = useParams<{ id: string | undefined }>();

  const [values, setValues] = useState<Contact>(initialValues);

  useEffect(() => setValues(initialValues), [initialValues]);

  const handleValueChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    onValueChange(e);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      onDelete(parseInt(contactId));
      reset(INITIAL_CONTACT);
    }
  };

  const handleSubmit = () => {
    if (contactId) onUpdate(parseInt(contactId));
    else onCreate();
  };

  return (
    <Fragment>
      <Typography size='5' textAlign='left'>
        <Icon name={contactId ? 'pencil' : 'plus-square'} />
        &nbsp; {contactId ? 'Modify Contact' : 'Add New Contact'}
      </Typography>
      <Divider />
      <Grid container>
        <Grid item>
          <label>First Name</label>
          <TextField
            name='name'
            value={values.name}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Last Name</label>
          <TextField
            name='lastName'
            value={values.lastName}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Designation</label>
          <TextField
            name='designation'
            value={values.designation}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Email</label>
          <TextField
            name='email'
            value={values.email}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Tel Number</label>
          <TextField
            name='telNumber'
            type='number'
            value={values.telNumber}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Age</label>
          <TextField
            name='age'
            type='number'
            value={String(values.age)}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Website Url</label>
          <TextField
            name='webUrl'
            value={values.webUrl}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Avatar Url</label>
          <TextField
            name='avatar'
            value={values.avatar}
            onChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>Tags</label>
          <TagInput
            name='tags'
            defaultValues={values.tags}
            handleChange={handleValueChange}
          />
        </Grid>
        <Grid item>
          <label>&nbsp;</label>
          <Button color='dark' type='button' onClick={handleSubmit}>
            <Icon name={contactId ? 'pencil' : 'angle-double-right'} />
            &nbsp; {!contactId ? 'Submit' : 'Update'}
          </Button>
          &nbsp;
          {contactId && (
            <Button color='danger' type='button' onClick={handleDelete}>
              <Icon name={'trash'} />
              &nbsp; Delete
            </Button>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ContactForm;
