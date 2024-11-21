import styled from 'styled-components';

export interface IButtonProps {
    title: string;
    disabled: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}