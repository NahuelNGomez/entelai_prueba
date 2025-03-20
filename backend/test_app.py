import unittest
import json
from app import app

class FlaskMoviesAPITest(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True
        
    def test_get_all_movies(self):
        response = self.app.get('/movies')
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('total', data)
        self.assertIn('movies', data)
        self.assertIn('limit', data)
        self.assertIn('offset', data)
        self.assertEqual(data['limit'], 20)
        self.assertEqual(data['offset'], 0)
        self.assertLessEqual(len(data['movies']), 20)
    
    def test_movie_search_by_title(self):
        response = self.app.get('/movies?title=star')
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('total', data)
        self.assertIn('movies', data)
        
        for movie in data['movies']:
            self.assertIn('star', movie['title'].lower())
    
    def test_pagination(self):
        response_1 = self.app.get('/movies?limit=5&offset=0')
        data_1 = json.loads(response_1.data)
        
        response_2 = self.app.get('/movies?limit=5&offset=5')
        data_2 = json.loads(response_2.data)
        
        self.assertEqual(response_1.status_code, 200)
        self.assertEqual(response_2.status_code, 200)
        self.assertEqual(data_1['limit'], 5)
        self.assertEqual(data_1['offset'], 0)
        self.assertEqual(data_2['limit'], 5)
        self.assertEqual(data_2['offset'], 5)
        
        self.assertNotEqual(data_1['movies'], data_2['movies'])
    
    def test_limit_parameter(self):
        response = self.app.get('/movies?limit=10')
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['limit'], 10)
        self.assertLessEqual(len(data['movies']), 10)

if __name__ == '__main__':
    unittest.main()