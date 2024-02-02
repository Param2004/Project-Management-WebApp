#!/usr/bin/env python3

import os
import sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# test_file = [doc for doc in os.listdir() if doc.endswith('third.txt')]

if len(sys.argv) != 2:
    print("Usage: python main.py <test_file>")
    sys.exit(1)

test_file = [sys.argv[1]]
# print(test_file)

# os.chdir("./txt_files/")

student_files = [doc for doc in os.listdir() if doc.endswith('.txt')]
student_notes = [open(_file, encoding='utf-8').read()
                 for _file in student_files]


def vectorize(Text): return TfidfVectorizer().fit_transform(Text).toarray()
def similarity(doc1, doc2): return cosine_similarity([doc1, doc2])



vectors = vectorize(student_notes)
s_vectors = list(zip(student_files, vectors))
vector_t = []

for x, y in s_vectors:
    if(x == test_file[0]):
        vector_t = [y]


test_vector = list(zip(test_file, vector_t))
plagiarism_results = set()

def check_plagiarism():
    global s_vectors
    for student_a, text_vector_a in s_vectors:
        if(student_a != test_vector[0][0]):
            sim_score = similarity(test_vector[0][1], text_vector_a)[0][1]
            score = (test_vector[0][0], student_a, "{:.2f}".format(sim_score*100) )
            plagiarism_results.add(score)
    return plagiarism_results


for data in check_plagiarism():
    print(data)
