import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEp = { 
    id: 1 , 
    name: "", 
    season: 1,
    image:null, 
    number: 1, 
    summary: "test stuff", 
    runtime: 1 
    };
    test("renders without error", () => { 
    render(<Episode episode={testEp}/>)
});

const testWithoutImage = { 
    id: 1 , 
    name: "", 
    season: 1, 
    number: 1, 
    image:null,
    summary: "test stuff", 
    runtime: 1 
    }

test("renders the summary test passed as prop", () => { 
    render(<Episode episode={testEp}/>);
    const summary = screen.queryByText(/test stuff/i);

    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("test stuff")
});

test("renders default image when image is not defined", () => { 
    render(<Episode episode={testWithoutImage}/>);
    const img = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(img).toBeInTheDocument();
});
